/**
 * Generates and downloads a standard VCF (vCard 3.0) contact file for the user.
 * Supports mobile and desktop.
 */
export const downloadVCF = (contact) => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:Thyrocare Mulund West
TITLE:${contact.designation}
TEL;TYPE=CELL,VOICE:${contact.phone}
EMAIL;TYPE=PREF,INTERNET:${contact.email || 'prajapatid158@gmail.com'}
ADR;TYPE=WORK:;;1A, Om Gajanan CHS, JN Road, Mulund West;Mumbai;Maharashtra;400080;India
URL:https://github.com/aditi280706/thyrocare-website
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${contact.name.replace(/\s+/g, '_')}.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
