document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const form = document.getElementById('multistepForm');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const progress = document.getElementById('progress');
    const prevButtons = document.querySelectorAll('.btn-prev');
    const nextButtons = document.querySelectorAll('.btn-next');
    const submitButton = document.querySelector('.btn-submit');
    const codeInputs = document.querySelectorAll('.code-input');
    const resendCodeButton = document.getElementById('resendCode');
    const closeBanner = document.querySelector('.close-btn');
    const topBanner = document.querySelector('.top-banner');
    
    // Variables
    let currentStep = 0;
    const totalSteps = formSteps.length - 1;
    
    // Inicializar el formulario
    updateFormSteps();
    updateProgressBar();
    
    // Cerrar banner superior
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }
    
    // Botones de navegación
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStep--;
            updateFormSteps();
            updateProgressBar();
        });
    });
    
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Validar el paso actual antes de avanzar
            if (validateStep(currentStep)) {
                currentStep++;
                updateFormSteps();
                updateProgressBar();
            }
        });
    });
    
    // Envío del formulario
    // Manejo de los inputs del código de verificación
    codeInputs.forEach((input, index) => {
        input.addEventListener('keyup', (e) => {
            // Si se ingresó un número, mover al siguiente input
            if (e.key >= '0' && e.key <= '9') {
                input.value = e.key;
                if (index < codeInputs.length - 1) {
                    codeInputs[index + 1].focus();
                }
                e.preventDefault();
            }
            
            // Si se presiona Backspace, borrar el valor actual y mover al input anterior
            if (e.key === 'Backspace') {
                input.value = '';
                if (index > 0) {
                    codeInputs[index - 1].focus();
                }
                e.preventDefault();
            }
        });
        
        // Permitir pegar el código completo
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData('text');
            if (pasteData.length === 6 && /^\d+$/.test(pasteData)) {
                codeInputs.forEach((input, i) => {
                    input.value = pasteData[i] || '';
                });
            }
        });
    });
    
    // Reenviar código
    if (resendCodeButton) {
        resendCodeButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Se ha enviado un nuevo código de verificación a su email y teléfono.');
        });
    }
    
    // Funciones de actualización de la UI
    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    function updateProgressBar() {
        progressSteps.forEach((step, index) => {
            if (index <= currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Actualizar la barra de progreso
        const progressWidth = (currentStep / totalSteps) * 100;
        progress.style.width = `${progressWidth}%`;
    }
    
    // Validación de cada paso
    function validateStep(step) {
        const currentFormStep = formSteps[step];
        const requiredFields = currentFormStep.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (field.type === 'radio') {
                // Para inputs de tipo radio, verificar si alguno del mismo nombre está seleccionado
                const name = field.name;
                const radioGroup = currentFormStep.querySelectorAll(`input[name="${name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                
                if (!isChecked) {
                    isValid = false;
                    // Mostrar mensaje de error cerca del grupo de radio
                    const radioGroupContainer = field.closest('.form-group');
                    showError(radioGroupContainer, `Por favor, seleccione una opción.`);
                }
            } else if (field.value.trim() === '') {
                isValid = false;
                showError(field, 'Este campo es obligatorio.');
            } else {
                clearError(field);
            }
        });
        
        return isValid;
    }
    
    // Mostrar mensaje de error
    function showError(field, message) {
        // Eliminar mensaje de error existente
        clearError(field);
        
        // Crear y añadir nuevo mensaje de error
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.8rem';
        errorElement.style.marginTop = '5px';
        
        // Si es un grupo de radio, añadir después del último radio
        if (field.classList.contains('form-group')) {
            field.appendChild(errorElement);
        } else {
            field.parentNode.appendChild(errorElement);
        }
        
        // Resaltar el campo con error
        if (!field.classList.contains('form-group')) {
            field.style.borderColor = 'red';
        }
    }
    
    // Limpiar mensaje de error
    function clearError(field) {
        // Eliminar mensaje de error si existe
        const parent = field.classList.contains('form-group') ? field : field.parentNode;
        const errorElement = parent.querySelector('.error-message');
        if (errorElement) {
            parent.removeChild(errorElement);
        }
        
        // Restaurar estilo del campo
        if (!field.classList.contains('form-group')) {
            field.style.borderColor = '';
        }
    }
    
    // Validación en tiempo real para los campos
    document.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', function() {
            if (field.hasAttribute('required') && field.value.trim() !== '') {
                clearError(field);
            }
        });
    });
    
    // Validación específica para grupos de radio
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (radio.hasAttribute('required')) {
                const radioGroup = radio.closest('.form-group');
                clearError(radioGroup);
            }
        });
    });
});