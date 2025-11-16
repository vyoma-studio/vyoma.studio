import Script from "next/script";

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vyoma Studio",
    "description": "Creative studio crafting bold visuals, immersive designs, and standout brand stories.",
    "url": "https://vyoma.studio",
    "logo": "https://vyoma.studio/logo.png",
    "@id": "https://vyoma.studio/#organization",
    "founder": {
        "@type": "Person",
        "name": "Mangesh Bhardwaj",
        "url": "https://mbdev.me"
    },
    "sameAs": [
        "https://www.linkedin.com/company/vyoma-studio",
        "https://github.com/vyoma-studio",
        "https://www.instagram.com/vyoma__studio",
        "https://x.com/VyomaStudio"
    ],
    "identifier": [
        {
            "@type": "PropertyValue",
            "propertyID": "linkedin",
            "value": "vyoma-studio"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "github",
            "value": "vyoma-studio"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "instagram",
            "value": "vyoma__studio"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "twitter/x",
            "value": "VyomaStudio"
        }
    ]
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Script
                id="json-ld"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLD).replace(/</g, '\\u003c'),
                }}
            />
            {children}
        </main>
    );
}