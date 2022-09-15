import useNotifierStatusStore from "@/store/notifierStatus";

const useNotifier = () => {
  const store = useNotifierStatusStore();

  const requestPermission = () => {
    Notification.requestPermission().then(
      (permission: NotificationPermission) => {
        store.setPermission(permission);
        if (permission === "granted") console.log("permission is granted!");
        else if (permission === "denied")
          console.log("permission is denied! :(");
      }
    );
  };

  const getPermissionStatus = (): NotificationPermission => {
    return store.permission;
  };

  const newNotification = (title: string) => {
    if (!store.isGranted) requestPermission();
    return new Notification(title);
  };

  return { requestPermission, getPermissionStatus, newNotification };
};

export default useNotifier;
