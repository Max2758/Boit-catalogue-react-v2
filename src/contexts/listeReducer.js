export const MAXIMUM = 3;

export function listeReducer(liste, action) {
switch (action.type) {
case 'ajouter': {
const dejaLa = liste.some((l) => l.id === action.livre.id);
if (dejaLa || liste.length >= MAXIMUM) {
return liste;
}
const { id, titre, auteur } = action.livre;
return [...liste, { id, titre, auteur }];
}
case 'retirer':
return liste.filter((l) => l.id !== action.id);
case 'vider':
return [];
default:
throw new Error(`Action inconnue : ${action.type}`);
}
}
