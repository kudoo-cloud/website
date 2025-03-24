/**
 * Simple cookie consent banner for Kudoo website
 */

// Function to set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Create and show the cookie banner if consent has not been given
function showCookieConsent() {
    if (!getCookie('cookieConsent')) {
        // Create banner elements
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.style.position = 'fixed';
        banner.style.bottom = '0';
        banner.style.left = '0';
        banner.style.right = '0';
        banner.style.padding = '1rem';
        banner.style.background = '#1a2332';
        banner.style.color = 'white';
        banner.style.zIndex = '1000';
        banner.style.display = 'flex';
        banner.style.justifyContent = 'space-between';
        banner.style.alignItems = 'center';
        banner.style.flexWrap = 'wrap';
        banner.style.boxShadow = '0 -2px 10px rgba(0, 0, 0, 0.1)';

        // Message text
        const message = document.createElement('div');
        message.style.flex = '1';
        message.style.margin = '0.5rem 1rem 0.5rem 0';
        message.innerHTML = 'We use cookies to improve your experience on our website. By continuing to browse, you agree to our <a href="/content/cookie-policy.html" style="color: #2acb8f; text-decoration: underline;">Cookie Policy</a>.';

        // Button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '0.5rem';

        // Accept button
        const acceptButton = document.createElement('button');
        acceptButton.innerText = 'Accept All';
        acceptButton.style.padding = '0.5rem 1rem';
        acceptButton.style.border = 'none';
        acceptButton.style.borderRadius = '50px';
        acceptButton.style.background = 'linear-gradient(90deg, #2acb8f 0%, #2d9cdb 100%)';
        acceptButton.style.color = 'white';
        acceptButton.style.cursor = 'pointer';
        acceptButton.style.fontWeight = '600';

        // Settings button
        const settingsButton = document.createElement('button');
        settingsButton.innerText = 'Cookie Settings';
        settingsButton.style.padding = '0.5rem 1rem';
        settingsButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
        settingsButton.style.borderRadius = '50px';
        settingsButton.style.background = 'transparent';
        settingsButton.style.color = 'white';
        settingsButton.style.cursor = 'pointer';
        settingsButton.style.fontWeight = '600';

        // Add event listeners
        acceptButton.addEventListener('click', function() {
            setCookie('cookieConsent', 'accepted', 365);
            banner.remove();
        });

        settingsButton.addEventListener('click', function() {
            window.location.href = '/content/cookie-policy.html';
        });

        // Assemble the banner
        buttonContainer.appendChild(acceptButton);
        buttonContainer.appendChild(settingsButton);
        banner.appendChild(message);
        banner.appendChild(buttonContainer);

        // Add the banner to the page
        document.body.appendChild(banner);
    }
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', showCookieConsent);