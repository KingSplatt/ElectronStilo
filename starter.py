import subprocess
import os
import time

def start_backend():
    print("iniciando el backend...")
    front = os.path.abspath("C:/Users/mari_/OneDrive/Escritorio/Stilo/ElectronStilo/frontend")
    backend_process = subprocess.Popen(
        ["npm", "run", "dev"],
        #cwd=os.path.join(os.getcwd(), "./backend"),
        cwd=front,
        shell=True
    )
    return backend_process

def start_frontend():
    back = os.path.abspath("C:/Users/mari_/OneDrive/Escritorio/Stilo/ElectronStilo/backend")
    print("iniciando el frontend...")
    frontend_process = subprocess.Popen(
        ["npm", "run", "dev"],
        #cwd=os.path.join(os.getcwd(), "./frontend"),
        cwd=back,
        shell=True
    )
    return frontend_process

def start_electron():
    here =  os.path.abspath("C:/Users/mari_/OneDrive/Escritorio/Stilo/ElectronStilo")
    print("iniciando Electron...")
    electron_process = subprocess.Popen(
        ["npm", "start"],
        #cwd=os.path.join(os.getcwd(),"./"),
        cwd=here,
        shell=True
    )
    return electron_process

if __name__ == "__main__":
    try:
        backend = start_backend()
        time.sleep(5) 
        frontend = start_frontend()
        time.sleep(5) 
        electron = start_electron()
        electron.wait()

    except KeyboardInterrupt:
        print("Cerrando procesos...")
        backend.terminate()
        frontend.terminate()
        electron.terminate()
        print("Todos los procesos han sido cerrados.")
