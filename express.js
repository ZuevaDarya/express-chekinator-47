import express from 'express';

const app = express();

app.use(express.json());

app.get('/:DDMMYY', (req, res) => {
  const DDMMYY = req.params.DDMMYY;
  if (/^\d{6}$/.test(DDMMYY)) {
    const dd = DDMMYY.slice(0, 2);
    const mm = DDMMYY.slice(2, 4);
    const yyyy = '20' + DDMMYY.slice(4);
    const currentDate = dd + '-' + mm + '-' + yyyy;

    const responseObject = {
      date: currentDate,
      login: 'zuevadi', 
    };

    res.setHeader('Content-Type', 'application/json');
    res.json(responseObject);
  } else {
    res.status(400).json({ error: 'Неверный формат DDMMYY' });
  }
});

app.get('/api/rv/:abc', (req, res) => {
  const abc = req.params.abc;
  const reversedAbc = abc.split('').reverse().join('');
  res.send(reversedAbc);
});

app.listen(1212, () => {
  console.log('Server 1212 was started!');
});
