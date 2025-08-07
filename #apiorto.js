case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!text) return example("format salah contoh =*${prefix+command}* username,628XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return example("username,628XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await conn.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = capital(username) + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

        await conn.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break
case "buypanel":
case "belipanel": {
    if (!text) return reply("Format: nama,1gb");
    const [username, packageName] = text.split(",");
    if (!username || !packageName) return reply("Format: nama,1gb");

    const packages = {
        "1gb": { ram: "1024", disk: "1024", cpu: "40", harga: 1000 },
        "2gb": { ram: "2048", disk: "2048", cpu: "60", harga: 2000 },
        "3gb": { ram: "3072", disk: "3072", cpu: "80", harga: 3000 },
        "4gb": { ram: "4096", disk: "4096", cpu: "100", harga: 4000 },
        "5gb": { ram: "5120", disk: "5120", cpu: "120", harga: 5000 },
        "6gb": { ram: "6144", disk: "6144", cpu: "140", harga: 6000 },
        "7gb": { ram: "7168", disk: "7168", cpu: "160", harga: 7000 },
        "8gb": { ram: "8192", disk: "8192", cpu: "180", harga: 8000 },
        "9gb": { ram: "9216", disk: "9216", cpu: "200", harga: 9000 },
        "10gb": { ram: "10240", disk: "10240", cpu: "220", harga: 10000 },
        "unli": { ram: "0", disk: "0", cpu: "0", harga: 15000 }
    };

    const selected = packages[packageName.toLowerCase()];
    if (!selected) return reply("❌ Paket tidak valid. Contoh: nama,1gb");

    const { ram, disk, cpu, harga } = selected;
    const ppn = Math.floor(Math.random() * 100) + 1;
    const total = harga + ppn;

    const email = `${username.toLowerCase()}@gmail.com`;
    const name = username.charAt(0).toUpperCase() + username.slice(1);
    const password = username + Math.floor(Math.random() * 1000);

    try {
        const payRes = await fetch(`https://kyyapinew.vercel.app/orderkuota/createpayment?apikey=${global.kyyapi}&amount=${total}&codeqr=${global.qriscode}`);
        const payData = await payRes.json();
        if (!payData.status) return reply("❌ Gagal membuat QRIS.");

        const { idtransaksi, expired, imageqris } = payData.result;
        const expiredTime = new Date(expired).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

        const textQris = `*💳 Detail Pembayaran Anda*\n\n` +
            `🆔 ID Transaksi: ${idtransaksi}\n` +
            `💰 Nominal: Rp ${harga.toLocaleString("id-ID")}\n` +
            `📊 PPN: Rp ${ppn.toLocaleString("id-ID")}\n` +
            `🧾 Total Bayar: Rp ${total.toLocaleString("id-ID")}\n\n` +
            `📌 Silakan scan QRIS sebelum *${expiredTime}* untuk menyelesaikan pembayaran.`;

        const msg = await conn.sendMessage(m.chat, { image: { url: imageqris.url }, caption: textQris }, { quoted: m });

        let sukses = false;

        const cancelTimer = setTimeout(async () => {
            if (!sukses) {
                await conn.sendMessage(m.chat, { delete: msg.key });
                await conn.sendMessage(m.chat, { text: "⛔ Transaksi dibatalkan karena waktu habis." });
            }
        }, 5 * 60 * 1000); // 5 menit

        while (!sukses) {
            try {
                const cekRes = await fetch(`https://kyyapinew.vercel.app/orderkuota/cekstatus?apikey=${global.kyyapi}&merchant=${global.merchan}&keyorkut=${global.keyorkut}`);
                const cekData = await cekRes.json();

                if (cekData.status && parseInt(cekData.result.amount) === total) {
                    sukses = true;
                    clearTimeout(cancelTimer);

                    await conn.sendMessage(m.chat, { text: "✅ Pembayaran diterima. Membuat panel..." });

                    // Buat akun dan server (contoh simulasi saja)
                    const user = {
                        username: email,
                        email,
                        firstname: name
                    };

                    const server = {
                        id: Math.floor(Math.random() * 99999)
                    };

                    const tanggal = (num) => {
                        const date = new Date(num);
                        return date.toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        });
                    };

                    const detailPanel = `*✅ Berikut Detail Akun Panel Kamu 📦*\n\n` +
                        `*📡 ID Server:* ${server.id}\n` +
                        `*👤 Username:* ${user.username}\n` +
                        `*🔐 Password:* ${password}\n` +
                        `*🗓️ Tanggal Pembuatan:* ${tanggal(Date.now())}\n\n` +
                        `*🌐 Spesifikasi Server:*\n` +
                        `*• RAM:* ${ram === "0" ? "Unlimited" : ram / 1024 + " GB"}\n` +
                        `*• Disk:* ${disk === "0" ? "Unlimited" : disk / 1024 + " GB"}\n` +
                        `*• CPU:* ${cpu === "0" ? "Unlimited" : cpu + "%"}\n` +
                        `*• Domain:* ${global.domain}\n\n` +
                        `📌 *Syarat & Ketentuan:*\n` +
                        `• Panel berlaku selama 1 bulan\n` +
                        `• Simpan data ini dengan baik\n` +
                        `• Garansi pembelian 15 hari (1x replace)\n` +
                        `• Claim garansi wajib menyertakan bukti chat pembelian`;

                    await conn.sendMessage(m.chat, { text: detailPanel }, { quoted: m });
                }
            } catch (err) {
                console.log("Cek status error:", err);
            }

            if (!sukses) await new Promise(res => setTimeout(res, 10000)); // cek tiap 10 detik
        }

    } catch (err) {
        console.error("Error buypanel:", err);
        reply("❌ Terjadi kesalahan saat memproses permintaan Anda.");
    }
}
break;