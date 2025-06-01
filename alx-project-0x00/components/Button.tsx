import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles = '', onClick }) => {
    return (
      <button
        className={`px-4 py-2 bg-blue-600 text-white font-semibold ${styles}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  };

export default Button;