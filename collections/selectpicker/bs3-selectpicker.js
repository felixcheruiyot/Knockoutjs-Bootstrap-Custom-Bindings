/**
 * Selectpicker binding
 * @type {Object}
 */
ko.bindingHandlers.selectPicker = {
    init: function(element, valueAccessor, allBindingsAccessor) {
        if ($(element).is('select')) {
            if (ko.isObservable(valueAccessor())) {
                ko.bindingHandlers.value.init(element, valueAccessor, allBindingsAccessor);
            }
            $(element).selectpicker().addClass('form-control');
        }
    },
    update: function(element, valueAccessor, allBindingsAccessor) {
        if ($(element).is('select')) {
            var selectPickerOptions = allBindingsAccessor().selectPickerOptions;
            if (typeof selectPickerOptions !== 'undefined' && selectPickerOptions !== null) {
                var options = selectPickerOptions.options,
                    optionsText = selectPickerOptions.optionsText,
                    optionsValue = selectPickerOptions.optionsValue,
                    value = selectPickerOptions.value,
                    optionsCaption = selectPickerOptions.optionsCaption;
                if (ko.utils.unwrapObservable(options).length > 0) {
                    ko.bindingHandlers.options.update(element, options, ko.observable({
                        optionsText: optionsText,
                        optionsValue: optionsValue,
                        optionsCaption: optionsCaption,
                        value: value
                    }));
                }
            }
            if (ko.isObservable(valueAccessor())) {
                ko.bindingHandlers.value.update(element, valueAccessor);
            }
            $(element).selectpicker('refresh');
        }
    }
};