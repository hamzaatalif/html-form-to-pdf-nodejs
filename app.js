const express = require("express");
const fs = require("fs")
const path = require("path");
const { jsPDF } = require("jspdf");

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"/public")))

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

app.get("/",(req,res)=>{
    res.send(path.join(__dirname,"./public/index.html"));
})

app.post("/submit", (req, res) => {

    const doc = new jsPDF();

    // for device no. 1 starts here
    // for device no. 1 starts here
    // for device no. 1 starts here
    doc.setTextColor(204, 0, 0);
    doc.setFont(undefined, "bold").setFontSize(24).text(req.body.t1, 25, 20)
    doc.setTextColor(0, 0, 0);
    doc.addImage(base64_encode(path.join(__dirname,"./public/cpulogo.png")), "PNG", 10, 30, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(req.body.c1, 25, 37)
    doc.addImage(base64_encode(path.join(__dirname,"./public/ramlogo.png")), "PNG", 10, 45, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`RAM: ${req.body.r1}`, 25, 52)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 10, 60, 10, 10)
    if (req.body.q1a === "on") {
        doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s1} SSD`, 25, 65)
    }
    doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s1}`, 25, 65)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 10, 75, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`VIDEO: ${req.body.g1}`, 25, 81)
    doc.addImage(base64_encode(path.join(__dirname,"./public/oslogo.png")), "PNG", 10, 90, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`OS: ${req.body.o1}`, 25, 96)
    if (req.body.officeQ1 === "yes") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/officelogo.png")), "PNG", 10, 105, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`OFFICE: ${req.body.office1} VERSION`, 25, 111)
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 10, 120, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w1} Months`, 25, 126)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p1}.00`, 27, 142)
    }
    else if (req.body.officeQ1 === "no") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 10, 107, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w1} Months`, 25, 113)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p1}.00`, 27, 130)
    }
    if (req.body.nr1y === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(90, 130, 10);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(15).text("NEW", 84, 131.5)
    }
    if (req.body.nr1n === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(90, 130, 12);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(12).text("REFURB", 82, 131.5)
    }
    // for device no. 1 ends here
    // for device no. 1 ends here
    // for device no. 1 ends here
    // //////////////////////////////////////
    // /////////////////////////////////////
    // ////////////////////////////////////
    // for device no. 2 starts here
    // for device no. 2 starts here
    // for device no. 2 starts here
    doc.setTextColor(204, 0, 0);
    doc.setFont(undefined, "bold").setFontSize(24).text(req.body.t2, 115, 20)
    doc.setTextColor(0, 0, 0);
    doc.addImage(base64_encode(path.join(__dirname,"./public/cpulogo.png")), "PNG", 115, 30, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(req.body.c2, 130, 37)
    doc.addImage(base64_encode(path.join(__dirname,"./public/ramlogo.png")), "PNG", 115, 45, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`RAM: ${req.body.r2}`, 130, 52)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 115, 60, 10, 10)
    if (req.body.q2a === "on") {
        doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s2} SSD`, 130, 65)
    }
    doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s2}`, 130, 65)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 115, 75, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`VIDEO: ${req.body.g2}`, 130, 81)
    doc.addImage(base64_encode(path.join(__dirname,"./public/oslogo.png")), "PNG", 115, 90, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`OS: ${req.body.o2}`, 130, 96)
    if (req.body.officeQ2 === "yes") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/officelogo.png")), "PNG", 115, 105, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`OFFICE: ${req.body.office2} VERSION`, 130, 111)
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 115, 120, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w2} Months`, 130, 126)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p2}.00`, 132, 142)
    }
    else if (req.body.officeQ2 === "no") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 115, 107, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w2} Months`, 130, 113)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€${req.body.p2}.00`, 132, 130)
    }
    if (req.body.nr2y === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(197, 130, 10);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(15).text("NEW", 191, 131.5)
    }
    if (req.body.nr2n === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(197, 130, 12);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(12).text("REFURB", 189, 131.5)
    }
    // for device no. 2 ends here
    // for device no. 2 ends here
    // for device no. 2 ends here
    // //////////////////////////////////////
    // /////////////////////////////////////
    // ////////////////////////////////////
    // for device no. 3 starts here
    // for device no. 3 starts here
    // for device no. 3 starts here
    doc.setTextColor(204, 0, 0);
    doc.setFont(undefined, "bold").setFontSize(24).text(req.body.t3, 25, 165)
    doc.setTextColor(0, 0, 0);
    doc.addImage(base64_encode(path.join(__dirname,"./public/cpulogo.png")), "PNG", 10, 175, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(req.body.c3, 25, 182)
    doc.addImage(base64_encode(path.join(__dirname,"./public/ramlogo.png")), "PNG", 10, 190, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`RAM: ${req.body.r3}`, 25, 197)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 10, 205, 10, 10)
    if (req.body.q3a === "on") {
        doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s3} SSD`, 25, 210)
    }
    doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s3}`, 25, 210)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 10, 220, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`VIDEO: ${req.body.g3}`, 25, 226)
    doc.addImage(base64_encode(path.join(__dirname,"./public/oslogo.png")), "PNG", 10, 235, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`OS: ${req.body.o3}`, 25, 241)
    if (req.body.officeQ3 === "yes") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/officelogo.png")), "PNG", 10, 250, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`OFFICE: ${req.body.office3} VERSION`, 25, 256)
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 10, 265, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w3} Months`, 25, 271)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p3}.00`, 27, 287)
    }
    else if (req.body.officeQ3 === "no") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 10, 252, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w3} Months`, 25, 258)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p3}.00`, 27, 275)
    }
    if (req.body.nr3y === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(90, 275, 10);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(15).text("NEW", 84, 276.5)
    }
    if (req.body.nr3n === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(90, 275, 12);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(12).text("REFURB", 82, 276.5)
    }
    // for device no. 3 ends here
    // for device no. 3 ends here
    // for device no. 3 ends here
    // //////////////////////////////////////
    // /////////////////////////////////////
    // ////////////////////////////////////
    // for device no. 4 starts here
    // for device no. 4 starts here
    // for device no. 4 starts here
    doc.setTextColor(204, 0, 0);
    doc.setFont(undefined, "bold").setFontSize(24).text(req.body.t4, 130, 165)
    doc.setTextColor(0, 0, 0);
    doc.addImage(base64_encode(path.join(__dirname,"./public/cpulogo.png")), "PNG", 115, 175, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(req.body.c4, 130, 182)
    doc.addImage(base64_encode(path.join(__dirname,"./public/ramlogo.png")), "PNG", 115, 190, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`RAM: ${req.body.r4}`, 130, 197)
    doc.addImage(base64_encode(path.join(__dirname,"./public/storagelogo.png")), "PNG", 115, 205, 10, 10)
    if (req.body.q4a === "on") {
        doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s4} SSD`, 130, 210)
    }
    doc.setFont(undefined, "normal").setFontSize(12).text(`STORAGE: ${req.body.s4}`, 130, 210)
    doc.addImage(base64_encode(path.join(__dirname,"./public/gpulogo.png")), "PNG", 115, 220, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`VIDEO: ${req.body.g4}`, 130, 226)
    doc.addImage(base64_encode(path.join(__dirname,"./public/oslogo.png")), "PNG", 115, 235, 10, 10)
    doc.setFont(undefined, "normal").setFontSize(12).text(`OS: ${req.body.o4}`, 130, 241)
    if (req.body.officeQ4 === "yes") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/officelogo.png")), "PNG", 115, 250, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`OFFICE: ${req.body.office4} VERSION`, 130, 256)
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 115, 265, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w4} Months`, 130, 271)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p4}.00`, 132, 287)
    }
    else if (req.body.officeQ4 === "no") {
        doc.addImage(base64_encode(path.join(__dirname,"./public/wrlogo.png")), "PNG", 115, 252, 10, 10)
        doc.setFont(undefined, "normal").setFontSize(12).text(`WARRANTY: ${req.body.w4} Months`, 130, 258)
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(20).text(`€ ${req.body.p4}.00`, 132, 275)
    }
    if (req.body.nr4y === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(197, 275, 10);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(15).text("NEW", 191, 276.5)
    }
    if (req.body.nr4n === "on") {
        doc.setDrawColor(204, 0, 0)
        doc.circle(197, 275, 12);
        doc.setTextColor(204, 0, 0);
        doc.setFont(undefined, "bold").setFontSize(12).text("REFURB", 189, 276.5)
    }
    // for device no. 4 ends here
    // for device no. 4 ends here
    // for device no. 4 ends here
    // draw vertical and horizontal lines for cutting the page
    doc.setFillColor(100);
    doc.context2d.fillRect(104.75, 0, 0.5, 297)
    doc.context2d.fillRect(0, 146.75, 210, 0.5)
    // save the file on server
    doc.save("a4.pdf");
    // download it on user end
    res.download("./a4.pdf");
})

app.listen(PORT, console.log(`App is listening on port: ${PORT}...`))