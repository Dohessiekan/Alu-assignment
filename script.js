// script.js

document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '0a3d25bbabmsh8aea85ddaa1da70p1b3ebbjsn244b8d781b5e'; // Replace with your actual RapidAPI key
    const apiUrl = 'https://text-translator2.p.rapidapi.com/translate';
  
    const translateButton = document.querySelector('.btn');
    const sourceTextAreas = document.querySelectorAll('textarea[name="type"]');
    const targetTextAreas = document.querySelectorAll('.translated-text');
  
    translateButton.addEventListener('click', async function () {
      sourceTextAreas.forEach(async (sourceTextArea, index) => {
        const sourceLang = sourceTextArea.getAttribute('data-source-lang');
        const targetLang = sourceTextArea.getAttribute('data-target-lang');
        const textToTranslate = sourceTextArea.value;
  
        if (textToTranslate && sourceLang && targetLang) {
          const queryString = new URLSearchParams({
            source: sourceLang,
            target: targetLang,
            text: textToTranslate,
          }).toString();
  
          const finalUrl = `${apiUrl}?${queryString}`;
  
          try {
            const response = await fetch(finalUrl, {
              method: 'GET',
              headers: {
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey,
              },
            });
  
            if (response.ok) {
              const data = await response.json();
              targetTextAreas[index].value = data.data.translation;
            } else {
              console.error('API request failed:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
    });
  });