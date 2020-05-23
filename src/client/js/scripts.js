export const evaluateText = () => {
  let form = document.getElementsByClassName('form-input');

  form.onsubmit = async () => {
    let text = document.getElementById('text').value;

    try {
      let res = await fetch('http://localhost:8081/evaluate', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text
        })
      });
      let data = res.json();
      let output = document.getElementsByClassName('response-output');
      output.innerHTML = data.data;
    } catch (err) {
      console.log('Error with API request');
      alert('Sorry! There is a problem with API request');
    }
  };
};
