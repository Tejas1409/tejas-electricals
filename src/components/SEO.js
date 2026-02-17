import React from 'react';

const SEO = ({ 
  title = "Tejas Electricals", 
  description = "Professional electrical services in Pune - Residential, Commercial, Industrial, Solar & CCTV installations",
  image = "https://via.placeholder.com/1200x630?text=Tejas+Electricals",
  url = "https://tejaselectricals.com"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = `${title} | Tejas Electricals Pune`;
    
    // Update meta tags
    const metaTags = {
      description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:url': url,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description, image, url]);

  return null;
};

export default SEO;