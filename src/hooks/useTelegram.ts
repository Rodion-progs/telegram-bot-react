export function useTelegram() {
    // @ts-ignore
    const tg = window.Telegram.WebApp;

    const handleClose = () => {
        tg.close();
    };

    const handleToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }

    return {
        handleClose,
        tg,
        handleToggleButton,
        user: tg.initDataUnsafe?.user,
    }
}
