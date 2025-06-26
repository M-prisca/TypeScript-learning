//question: correct the type related error
// const sendMessage = (message: { to: string; text?: string }) => {
//     return message.text.toUpperCase();
// };
// sendMessage({ to: 'Alice' })

const sendMessage = (message: { to: string; text?: string }) => {
    if (typeof message.text === 'string'){
         return message.text.toUpperCase();
         //return message.text?.toUpperCase();
      }
};
sendMessage({ to: 'Alice' })