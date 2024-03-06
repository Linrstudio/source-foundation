import * as store from "../utils/storage";

import "./styles/compact-vars.css";
import "./styles/utils.css";
import "./styles/styles.css";
import "./styles/icons.css";
import "./styles/dialog.css";

import "./helpers/modal";
import { FileVariablesRecord } from "../utils/collect-variables";

let importButton = document.getElementById('importVariablesButton') as HTMLButtonElement;
let swapVariablesButton = document.getElementById('swapVariablesButton') as HTMLButtonElement;
let reloadStoreButton = document.getElementById('reloadStore') as HTMLButtonElement;

let fileName;

importButton.addEventListener('click', (e) => {
    const fileNameInput = document.querySelector('#importModal input[name=fileName]') as HTMLInputElement;
    parent.postMessage({
        pluginMessage: { type: 'COLLECT_VARS', fileName: fileNameInput.value }
    }, "*");
});

reloadStoreButton.addEventListener('click', (e) => {
    parent.postMessage({
        pluginMessage: { type: 'VARS_UI_LOADED' }
    }, "*");
})

swapVariablesButton.addEventListener('click', (e) => {
    const radioButton = document.querySelector('#presetsList input[type=radio]:checked') as HTMLInputElement
    const key = radioButton?.value || null;

    const modal = document.getElementById('swapModal') as HTMLDialogElement;
    const swapProgressMsg = document.getElementById('swapProgress') as HTMLDivElement;
    swapProgressMsg.innerHTML = 'Working...';

    key && modal.showModal();

    parent.postMessage({
        pluginMessage: { type: 'SWAP_VARIABLES', fileName: key }
    }, "*");
})

// window.addEventListener('message', ({ data: { pluginMessage } ) => {
//     console.log(e);
// })


window.onmessage = async ({ data: { pluginMessage } }) => {

    if (pluginMessage.event == 'SYNC_VARS') {
        fileName = pluginMessage.fileName;
        renderList(pluginMessage.data);

        document.querySelectorAll('input[name=fileName]').forEach((el: HTMLInputElement) => {
            el.value = fileName;
        });

        document.querySelectorAll('dialog').forEach((modal: HTMLDialogElement) => {
            modal.close();
        });
    }

    if(pluginMessage.event == 'SWAP_VARIABLES_DONE') {
        const modal = document.getElementById('swapModal') as HTMLDialogElement;
        modal.close();
    }

    if(pluginMessage.event == 'SWAP_VAR_PROGRESS') {
        const swapProgressMsg = document.getElementById('swapProgress') as HTMLDivElement;
        swapProgressMsg.innerHTML = pluginMessage.message + '...';
    }


};

interface StoredData {
    [key: string]: FileVariablesRecord
}

function renderList(storedData: StoredData) {
    const markup = [];
    const entries = Object.entries(storedData);

    entries.forEach(([fileKey, value]) => {
        markup.push(`
            <label class="theme-item">
                <input type="radio" name="theme" value="${fileKey}" />
                <div class="flex-1 flex flex-col px-base py-minor-base gap-minor-xs">
                    <span class="flex flex-row items-baseline justify-between">
                        <span>${value.fileName}</span>
                        <span class="text-sm color-text-base-500 hidden">${value.timestamp}</span>
                    </span>
                </div>
                <div class="cursor-pointer py-xs px-sm flex items-center justify-center opacity-70 hover:opacity-100 hover:color-primary-500" data-item="${fileKey}" data-action="remove" title="Remove collection">
                    <span class="icon icon-trash-2"></span>
                </div>
            </label>`);
    })
    const listboxElement = document.getElementById('presetsList')
    listboxElement.innerHTML = markup.join('');

    listboxElement.querySelectorAll('[data-action="remove"]').forEach((el: HTMLDivElement) => {
        el.addEventListener('click', (e) => {
            parent.postMessage({
                pluginMessage: { type: 'REMOVE_VARS_COLLECTION', fileName: el.dataset.item }
            }, "*");            
        })
    })
}

parent.postMessage({
    pluginMessage: { type: 'VARS_UI_LOADED' }
}, "*");