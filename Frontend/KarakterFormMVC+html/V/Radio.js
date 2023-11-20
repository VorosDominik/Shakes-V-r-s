// radio.js
export class Radio {
    constructor(key, elemleiro, szuloelem) {
        this.$szuloelem = $(szuloelem);
        this.key = key;
        this.elemleiro = elemleiro;

        this.createRadioElement();
    }

    createRadioElement() {
        // A címke és a sor törés létrehozása és hozzáadása közvetlenül a szülőelemhez
        let $label = $('<label>').text(this.elemleiro.megj);
        let $br = $('<br>');
        this.$szuloelem.append($label).append($br);

        // A rádiógombok divjének létrehozása
        let $radioDiv = $('<div>').addClass('mb-3 mt-3 sorba');

        this.elemleiro.options.forEach(option => {
            let $radioLabelDiv = $('<div>').addClass('form-check form-check-inline');
            let $input = $('<input>', {
                type: this.elemleiro.type,
                class: 'form-check-input',
                id: `${this.key}-${option.value}`,
                name: this.key,
                value: option.value,
                checked: option.checked
            }).on('change', function() {
                // Frissítjük a kiválasztott képek stílusát
                $('img.radio-image').removeClass('radio-image-selected');
                $(`img[for="${$(this).attr('id')}"]`).addClass('radio-image-selected');
            });

            let $optionLabel = $('<label>').addClass('form-check-label').attr('for', $input.attr('id'));
            if (option.image) {
                let $image = $('<img>', {
                    src: option.image,
                    alt: option.label,
                    class: 'radio-image' + (option.checked ? ' radio-image-selected' : ''),
                    style: 'cursor: pointer;'
                }).on('click', function() {
                    // Az input elem kiválasztása
                    $input.prop("checked", true).trigger('change');
                    $(this).addClass('radio-image-selected');
                });
                $optionLabel.append($image);
            } else {
                $optionLabel.append(option.label);
            }

            $radioLabelDiv.append($input).append($optionLabel);
            $radioDiv.append($radioLabelDiv);
        });

        // A rádiógombok csoportjának hozzáadása a szülőelemhez
        this.$szuloelem.append($radioDiv);
    }
}
