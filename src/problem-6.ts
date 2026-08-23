/**
 * 
 */
type Role = "admin" | 'editor' | 'viewer';

const canEdit = (role: Role): boolean => ((role === 'admin') || (role === "editor") ) ? true : false;

console.log(canEdit('admin'));
console.log(canEdit('editor'));
console.log(canEdit('viewer'));