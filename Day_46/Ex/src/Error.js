import image from "./Assets/Images/img1.jpg";
import "./Assets/Errors.scss";
export const Error = () => {
  return `
    <div class="error-page">
        <img src="${image}"/>
    </div>
    `;
};
