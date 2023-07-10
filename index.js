// Sample data for autocomplete suggestions
const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grapes'];

const input = document.getElementById("autocomplete-input");
const list = document.getElementById("autocomplete-list");

function updateAutoComplete() {
    const searchTerm = input.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(searchTerm));

    //clear the prev suggestion
    list.innerHTML = "";

    //render filtered suggestions in the UI
    filteredSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            input.value = suggestion;
            list.innerHTML = "";
        })
        list.appendChild(li)
    })

}

input.addEventListener("input", updateAutoComplete);