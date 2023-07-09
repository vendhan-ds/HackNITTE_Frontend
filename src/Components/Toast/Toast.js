import { notifications } from '@mantine/notifications';

const Toast = (title,message,color) => {
	notifications.show({
		title: title,
		message: message,
		color: color,
	});
};

export default Toast;