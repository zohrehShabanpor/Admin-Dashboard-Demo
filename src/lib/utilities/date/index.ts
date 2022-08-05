function getTime(date: Date): string {
  return date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
};
 
function getDate(date: Date): string {
  return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
}
 
export {getTime, getDate}; 
