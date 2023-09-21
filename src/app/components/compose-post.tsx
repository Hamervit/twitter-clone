'use client';

import { ComposePostTextArea } from './compose-post-textarea';
import { ComposePostButton } from './compose-post-button';
import { addPost } from '../actions/add-post-action';
import { useRef } from 'react';

interface IComposePostProps {
  avatarUrl: string;
}

export function ComposePost({ avatarUrl }: IComposePostProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="flex p-3 border-b border-white/20"
      ref={formRef}
    >
      <img
        className="rounded-full w-10 h-10 object-contain mr-2"
        src={avatarUrl}
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <ComposePostTextArea />
        <ComposePostButton />
      </div>
    </form>
  );
}
