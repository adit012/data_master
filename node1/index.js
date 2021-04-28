//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route jurusan
const jurusan = require("./route/jurusan")
app.use("/jurusan", jurusan)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai", auth, pegawai)

//import route siswa
const siswa = require("./route/siswa")
app.use("/siswa", siswa)

//import route pelanggaran
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", pelanggaran)

//membuat web server dengan port 2000
app.listen(2020, () => {
    console.log("server run on port 2020")
})