// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

use std::process::{Command, Child};
use std::sync::{Arc, Mutex};

fn start_server() -> Child {
    let current_dir = std::env::current_dir().unwrap();
    let project_root = current_dir.parent().unwrap(); 
    let python_executable = project_root
        .join("python")
        .join("env")
        .join("Scripts")
        .join("python.exe");
    let python_script = project_root
        .join("python")
        .join("server.py");

    println!("Python Executable: {:?}", python_executable);
    println!("Python Script: {:?}", python_script);

    let child = Command::new(python_executable)
        .arg(python_script)
        .spawn()
        .expect("Failed to start server");

    println!("Initializing server...");
    child
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let flask_server = Arc::new(Mutex::new(None));

    tauri::Builder::default()
    .setup({
        let flask_server = Arc::clone(&flask_server);
        move |_app| {
            let server_process = start_server();
            *flask_server.lock().unwrap() = Some(server_process);
    
            Ok(())
        }
    })
        .on_window_event({
            let flask_server = Arc::clone(&flask_server);
            move |_window, event| {
                if let tauri::WindowEvent::CloseRequested { .. } = event {
                    if let Some(mut server_process) = flask_server.lock().unwrap().take() {
                        println!("Stopping server...");
                        server_process.kill().expect("failed to terminate Flask server");
                    }
                }
            }
        })
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_store::Builder::new().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
