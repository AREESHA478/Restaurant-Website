// The search function to update results based on input
function search() {
    // Get the filter value from the input field and convert it to uppercase
    let filter = document.getElementById('search-bar').value.toUpperCase();
    
    // Get the category containers
    let categories = Array.from(document.querySelectorAll('#listproduct .category-container'));

    // Clear the existing product list
    let listproduct = document.getElementById('listproduct');
    listproduct.innerHTML = '';

    // Variable to keep track of whether we found any matching items
    let foundAny = false;

    categories.forEach(category => {
        // Get products within this category
        let productList = category.querySelector('.product-list');
        let categoryHeading = category.querySelector('.category-heading');
        let matchingItems = [];
        
        // Iterate through each product in this category
        Array.from(productList.children).forEach(item => {
            let titleElement = item.getElementsByClassName('title')[0];
            let value = titleElement.innerHTML || titleElement.innerText || titleElement.textContent;

            // Check if the title contains the filter text
            if (value.toUpperCase().indexOf(filter) > -1) {
                matchingItems.push(item);
                foundAny = true;
            }
        });

        // If there are matching items, append the category heading and matching items
        if (matchingItems.length > 0) {
            let newCategoryContainer = document.createElement('div');
            newCategoryContainer.classList.add('category-container');

            let newCategoryHeading = document.createElement('h2');
            newCategoryHeading.classList.add('category-heading');
            newCategoryHeading.textContent = categoryHeading.textContent; // Preserve the category name
            newCategoryContainer.appendChild(newCategoryHeading);

            let newProductList = document.createElement('div');
            newProductList.classList.add('product-list');

            matchingItems.forEach(item => {
                newProductList.appendChild(item);
            });

            newCategoryContainer.appendChild(newProductList);
            listproduct.appendChild(newCategoryContainer);
        }
    });

    // Show message if no results found and filter is not empty
    if (!foundAny && filter.length > 0) {
        listproduct.innerHTML = '<p>No results found</p>';
    }
}

// Attach debounced search function to input event
const debouncedSearch = debounce(search, 300); // Adjust delay as needed
document.getElementById('search-bar').addEventListener('input', debouncedSearch);





        //  AUDIO JAVASCRIPT

        // main.js
class VoiceRecorder {
    constructor() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported");
      } else {
        console.log("getUserMedia not supported");
      }
  
      this.mediaRecorder = null;
      this.stream = null;
      this.chunks = [];
      this.isRecording = false;
      this.recorderRef = document.querySelector("#recorder");
      this.playerRef = document.querySelector("#player");
      this.startRef = document.querySelector("#start");
      this.stopRef = document.querySelector("#stop");
  
      this.startRef.onclick = this.startRecording.bind(this);
      this.stopRef.onclick = this.stopRecording.bind(this);
  
      this.constraints = {
        audio: true,
        video: false,
      };
    }
  
    // Handle success
    handleSuccess(stream) {
      this.stream = stream;
      this.recorderRef.srcObject = this.stream;
      this.mediaRecorder = new MediaRecorder(this.stream);
  
      this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this);
      this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this);
  
      this.recorderRef.play();
      this.mediaRecorder.start();
    }
  
    onMediaRecorderDataAvailable(e) {
      this.chunks.push(e.data);
    }
  
    onMediaRecorderStop() {
      const blob = new Blob(this.chunks, { type: 'audio/ogg; codecs=opus' });
      const audioURL = window.URL.createObjectURL(blob);
      this.playerRef.src = audioURL;
      this.chunks = [];
      this.stream = null;
    }
  
    // Start recording
    startRecording() {
      if (this.isRecording) return;
  
      this.isRecording = true;
      this.startRef.innerHTML = "Recording...";
      this.playerRef.src = '';
  
      navigator.mediaDevices.getUserMedia(this.constraints)
        .then(this.handleSuccess.bind(this))
        .catch(this.handleError.bind(this));
    }
  
    // Stop recording
    stopRecording() {
      if (!this.isRecording) return;
  
      this.isRecording = false;
      this.startRef.innerHTML = "Record";
      this.recorderRef.pause();
      this.mediaRecorder.stop();
    }
  
    // Handle errors
    handleError(error) {
      console.error('Error accessing media devices.', error);
    }
  }
  
  window.VoiceRecorder = new VoiceRecorder();




 