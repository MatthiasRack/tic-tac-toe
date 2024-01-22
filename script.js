const imagesArray = [
    '/img/image10.jpg',
    '/img/image11.jpg',
    '/img/image12.jpg',
    '/img/image13.jpg',
    '/img/image14.jpg',
    '/img/image15.jpg',
    '/img/image16.jpg',
    '/img/image17.jpg',
    '/img/image18.jpg',
    '/img/image19.jpg',
    '/img/image6.jpg',
    '/img/image7.jpg',
    '/img/image8.jpg',
    '/img/image9.jpg'
  ];


  function render() {
    const container = document.getElementById('container');
  let html = '';

  for (let i = 0; i < imagesArray.length; i++) {
    html += '<img src="' +imagesArray[i] +'">';
    
  }
  container.innerHTML = html;
}