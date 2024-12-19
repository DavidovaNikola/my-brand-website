const translations = {
    en: {
        header: "Welcome to My Brand",
        aboutTitle: "About Me",
        videoTitle: "Watch the Videos", // Překlad pro Shiko Videon
        productTitle: "Products", // Překlad pro Produktet
        aboutContent: `
            <p>Hello! I am <strong>Adriana</strong>, and I create unique and personalized clothing with love and dedication for everyone who appreciates style and quality.</p>
            <p>I offer a wide range of products, including:</p>
            <ul>
                <li>Comfortable and unique T-shirts,</li>
                <li>Elegant intimate wear,</li>
                <li>Casual sweatshirts and hoodies,</li>
                <li>And any kind of custom order you may desire.</li>
            </ul>
            <p>What makes my work special? I design every product according to your request—whether it's a printed design or embroidered text. Every piece is made from <strong>100% quality cotton</strong>, ensuring comfort and durability.</p>
            <p>If you have a special idea for a garment that will make you feel truly unique, don't hesitate to contact me. Every creation is made to showcase your personality.</p>
        `,
        contactTitle: "Contact",
    },
    sq: {
        header: "Miresevini te Marka Ime",
        aboutTitle: "Rreth Meje",
        videoTitle: "Shiko Videon", // Původní albánský text
        productTitle: "Produktet", // Původní albánský text
        aboutContent: `
            <p>Përshëndetje! Unë jam <strong>Adriana</strong>, dhe krijoj me dashuri dhe përkushtim veshje unike dhe të personalizuara për të gjithë ata që vlerësojnë stilin dhe cilësinë.</p>
            <p>Ofroj një gamë të gjerë produktesh, duke përfshirë:</p>
            <ul>
                <li>T-shirt-a të rehatshme dhe unike,</li>
                <li>Veshje intime elegante,</li>
                <li>Bluza dhe mikina të përditshme,</li>
                <li>Si dhe çdo lloj porosie të personalizuar që ju mund të dëshironi.</li>
            </ul>
            <p>Çfarë e bën punën time të veçantë? Unë krijoj çdo produkt sipas kërkesës tuaj – qoftë me një dizajn të shtypur apo një mbishkrim të qëndisur. Çdo pjesë është krijuar nga <strong>100% pambuk cilësor</strong>, duke garantuar rehati dhe qëndrueshmëri.</p>
            <p>Nëse keni një ide të veçantë për një veshje që do t'ju bëjë të ndiheni vërtet unikë, mos ngurroni të më kontaktoni. Çdo krijim është bërë për të treguar personalitetin tuaj.</p>
        `,
        contactTitle: "Kontakt",
    },
};


document.getElementById("language-switch").addEventListener("click", function () {
    const lang = this.textContent === "English" ? "en" : "sq";
    this.textContent = lang === "en" ? "Shqip" : "English";

    const translation = translations[lang];

    document.querySelector("h1").textContent = translation.header;
    document.querySelector(".about-me h2").textContent = translation.aboutTitle;
    document.querySelector(".about-content").innerHTML = translation.aboutContent;
    document.querySelector(".contact h2").textContent = translation.contactTitle;

    // Překlad nadpisů Shiko Videon a Produktet
    document.querySelector(".video-section h2").textContent = translation.videoTitle;
    document.querySelector(".product-gallery h2").textContent = translation.productTitle;
});
