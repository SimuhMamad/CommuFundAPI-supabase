const postgre = require('../database')
const bookController = {
    getUser: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from Users")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    checkUser: async(req, res) => {
        try {
            const username = req.body.name
            const password = req.body.description;
            
            const queri = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
            console.log(queri)
            const result = await postgre.query(queri);
            //console.log(result)
            if (result.rows == 0) {
              res.json({ stat: 'failed' })
            }
            else{
              res.json({ stat: 'success', token: '123456' });
            }
             // Ensure correct property name
          } catch (error) {
            console.error('Error fetching data from database:', error);
            res.status(500).send('Internal Server Error'); // Send appropriate error response
          }
    },
    insertUser: async(req, res) => {
        try {
            const username = req.body.username
            const password = req.body.password;
            const name = req.body.name;
            const number = req.body.number;
            const email = req.body.email;
        
            
            const queri1 = `INSERT INTO users (username, password, nama, no_hp, email) VALUES 
                            ('${username}', '${password}', '${name}', '${number}', '${email}')`
            //console.log(queri)
            const result1 = await postgre.query(queri1);
            //console.log(result)
            const queri2 = `SELECT * FROM users where username = '${username}'`
            const result2 = await postgre.query(queri2);
            //console.log(result)
            if (result2.rows == 0) {
              res.json({ stat: 'failed' })
            }
            else{
              res.json({ stat: 'success', token: '123456' });
            }            
            res.send("Registrasi berhasil")
             // Ensure correct property name
          } catch (error) {
            console.error('Error fetching data from database:', error);
            res.json({stat: 'failed'})
            res.status(500).send('Internal Server Error'); // Send appropriate error response
          }
        
    },

    insertOrganisasi: async(req, res) => {
      try {
          const namaResmiO = req.body.namaResmiO
          const namaO = req.body.namaO;
          const kategoriO = req.body.kategoriO;
          const sektorO = req.body.sektorO;
          const alamatO = req.body.alamatO;
          const provinsiO = req.body.provinsiO;
          const kotaO = req.body.kotaO;

          const nameNr = req.body.nameNr;
          const emailNr = req.body.emailNr;
          const passwordNr = req.body.passwordNr;
          
          
          const queri = `INSERT INTO Detail_Organisasi (nama_resmi_organisasi, nama_organisasi, kategori_organisasi, sektor_organisasi, alamat_organisasi, provinsi_organisasi, kota_organisasi) VALUES 
                        ('${namaResmiO}', '${namaO}', '${kategoriO}', '${sektorO}', '${alamatO}', '${provinsiO}', '${kotaO}')`
          //console.log(queri)
          const result = await postgre.query(queri);
          //console.log(result)
          const queri2 = `INSERT INTO narahubung (nama_narahubung, email_narahubung, password) VALUES 
                          ('${nameNr}', '${emailNr}', '${passwordNr}')`
          const result2 = await postgre.query(queri2);
          
          const queri3 = `SELECT * FROM narahubung where email_narahubung = '${emailNr}'`
          const result3 = await postgre.query(queri3);
          //console.log(result)
          if (result3.rows == 0) {
            res.json({ stat: 'failed' })
          }
          else{
            res.json({ stat: 'success', token: '123456' });
          }
          res.send("Registrasi berhasil")
           // Ensure correct property name
        } catch (error) {
          console.error('Error fetching data from database:', error);
          res.status(500).send('Internal Server Error'); // Send appropriate error response
        }
      
  },

  insertProyek: async(req, res) => {
    try {
        const namaPy = req.body.namaPy
        const deskripsiPy = req.body.deskripsiPy;
        
        const danaPy = req.body.danaPy;
        const pendaftarPy = req.body.pendaftarPy;
        const tglawal = req.body.tglawal;
        const tglakhir = req.body.tglakhir;
        const nomorRek = req.body.nomorRek;
        const kategoriPy = req.body.kategoriPy;
        
        
        
        const queri = `INSERT INTO Detail_Proyek (nama_proyek, deskripsi_proyek, dana_proyek, pendaftar_proyek, tanggal_awal, tanggal_akhir, nomor_rekening, kategori_proyek) VALUES 
                      ('${namaPy}', '${deskripsiPy}', '${danaPy}', '${pendaftarPy}', '${tglawal}', '${tglakhir}',  '${nomorRek}', '${kategoriPy}')`
        //console.log(queri)
        const result = await postgre.query(queri);
        //console.log(result)
        res.send("Registrasi berhasil")
         // Ensure correct property name
      } catch (error) {
        console.error('Error fetching data from database:', error);
        res.status(500).send('Internal Server Error'); // Send appropriate error response
      }
    
  }

}

module.exports = bookController
