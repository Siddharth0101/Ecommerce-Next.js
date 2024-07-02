import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";
import { useEffect } from "react";

const NOTIFICATION_TTL = 5000;

const StackedNotifications = ({ notification, removeNotif }) => {
  return (
    <div className="flex items-center justify-center">
      <AnimatePresence>
        {notification && (
          <Notification
            removeNotif={removeNotif}
            key={notification.id}
            {...notification}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Notification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-xl bg-gradient-to-r from-violet-500 to-indigo-500 text-white fixed z-50 bottom-4 right-4"
    >
      <FiAlertCircle className="text-3xl absolute -top-4 -left-4 p-2 rounded-full bg-white text-violet-600 shadow-lg" />
      <span className="flex-grow">{text}</span>
      <button
        onClick={() => removeNotif(id)}
        className="ml-auto mt-0.5 p-1 rounded-full bg-white text-violet-600 hover:bg-gray-200 transition-colors shadow"
      >
        <FiX />
      </button>
    </motion.div>
  );
};

export default StackedNotifications;
