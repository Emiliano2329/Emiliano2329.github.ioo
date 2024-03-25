const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require('../path-to-your-firebase-admin-sdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(express.json());


app.post('/addContact', async (req, res) => {
  const { nombre, apellido, correo, celular, userUID } = req.body;
  try {
    const newContact = { nombre, apellido, correo, celular, userUID }; 
    const contactRef = await db.collection('contactos').add(newContact);
    res.status(201).json({ id: contactRef.id });
  } catch (error) {
    console.error("Error agregando documento: ", error);
    res.status(500).send("Error en el servidor");
  }
});

app.get('/getContacts', async (req, res) => {
  const userUID = req.query.userUID;
  if (!userUID) {
    return res.status(400).send('User UID is required.');
  }
  
  try {
    const contactosRef = db.collection('contactos').where('userUID', '==', userUID);
    const snapshot = await contactosRef.get();
    const contactos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(contactos);
  } catch (error) {
    console.error("Error obteniendo documentos: ", error);
    res.status(500).send("Error en el servidor");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
