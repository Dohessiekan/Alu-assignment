This my code about the APIs assignment so this webste is for stranslate so i have to use it to translate frome french to english or another, we will se the api coode too in this Readme.

document.addEventListener('DOMContentLoaded', function () {
const apiKey = '0a3d25bbabmsh8aea85ddaa1da70p1b3ebbjsn244b8d781b5e'; // Replace with your actual RapidAPI key
const apiUrl = 'https://text-translator2.p.rapidapi.com/translate';
const translateButton = document.querySelector('.btn');
const sourceText = document.querySelectorAll('textarea')[0];
const targetText = document.querySelectorAll('textarea')[1];

    translateButton.addEventListener('click', async function () {
      const sourceLanguage = document.querySelectorAll('select')[0].value;
      const targetLanguage = document.querySelectorAll('select')[1].value;

      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '0a3d25bbabmsh8aea85ddaa1da70p1b3ebbjsn244b8d781b5e',
          'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
          source_language: sourceLanguage,
          target_language: targetLanguage,
          text: sourceText.value
        })
      };

      try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
          const result = await response.text();
          targetText.value = result; // Display translated text
        } else {
          console.error('API request failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);

}
  });
});
