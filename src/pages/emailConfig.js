export const emailConfig = {
  serviceId: process.env.REACT_APP_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID, 
  publicKey: process.env.REACT_APP_PUBLIC_KEY
};
export function validateEmailConfig() {
  if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    throw new Error("Configuration EmailJS manquante");
  }
}
