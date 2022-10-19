const butInstall = document.getElementById('buttonInstall');

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (! promptEvent) {
        return;
    }
    
    promptEvent.prompt();


    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
