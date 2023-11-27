// radio.js
export class Radio {
    constructor(key, elemleiro, szuloelem) {
        this.$szuloelem = $(szuloelem);
        this.key = key;
        this.elemleiro = elemleiro;

        // Egyedi osztály hozzáadása minden rádiógomb csoportnak
        this.groupClass = 'radio-group-' + this.key;

        this.createRadioElement();
    }

    createRadioElement() {
        // A címke és a sor törés létrehozása és hozzáadása közvetlenül a szülőelemhez
        let $label = $('<label>').text(this.elemleiro.megj);
        let $br = $('<br>');
        this.$szuloelem.append($label).append($br);

        // A rádiógombok divjének létrehozása, hozzáadva az egyedi osztályt
        let $radioDiv = $('<div>').addClass('mb-3 mt-3 sorba ' + this.groupClass);

        this.elemleiro.options.forEach(option => {
            let $radioLabelDiv = $('<div>').addClass('form-check form-check-inline');
            let $input = $('<input>', {
                type: this.elemleiro.type,
                class: 'form-check-input',
                id: `${this.key}-${option.value}`,
                name: this.key,
                value: option.value,
                checked: option.checked
            }).on('change', () => {
                // Eltávolítjuk a kijelölt stílust minden képről a csoporton belül
                $(`.${this.groupClass} img.radio-image`).removeClass('radio-image-selected');
                // Hozzáadjuk a kijelölt stílust az aktuális kiválasztott képhez
                $(`.${this.groupClass} img[for="${$input.attr('id')}"]`).addClass('radio-image-selected');
            });

            let $optionLabel = $('<label>').addClass('form-check-label').attr('for', $input.attr('id'));
            if (option.image) {
                let $image = $('<img>', {
                    src: option.image,
                    alt: option.label,
                    class: 'radio-image' + (option.checked ? ' radio-image-selected' : ''),
                    style: 'cursor: pointer;',
                    // Hozzáadjuk az egyedi azonosítót a képhez
                    'for': `${this.key}-${option.value}`
                }).on('click', () => {
                    $input.prop("checked", true).trigger('change');
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
