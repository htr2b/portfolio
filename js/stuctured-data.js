const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Onur Kahan",
    "url": "https://onurkahan.com",
    "sameAs": [
        "https://github.com/htr2b",
        "https://linkedin.com/in/onurkahan"
    ],
    "jobTitle": "Developer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
    }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);
