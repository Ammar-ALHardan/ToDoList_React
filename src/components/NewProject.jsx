import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
   const enteredTitle = title.current.value;
   const entereddescription = description.current.value;
   const entereddueDate = dueDate.current.value;
      
   if(enteredTitle.trim() === '' ||
      entereddescription.trim() === '' ||
      entereddueDate.trim() === '') {
        modal.current.open();
        return;
   }
    
   onAdd({
    title: enteredTitle,
    description: entereddescription,
    dueDate: entereddueDate,
   });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Oopes .... Looks like you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every field.</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-slate-950" onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
    </>
  );
}
