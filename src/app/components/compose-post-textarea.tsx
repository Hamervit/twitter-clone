export function ComposePostTextArea() {
  return (
    <textarea
      name="content"
      rows={4}
      className="w-full text-xl bg-black placeholder-gray-500 p-2"
      placeholder="Qué está pasando?"
    ></textarea>
  );
}
