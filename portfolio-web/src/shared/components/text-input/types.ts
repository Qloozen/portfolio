import React from 'react';

export type TextInputProps = {
  label: string;
  errorMessages?: string[];
} & React.InputHTMLAttributes<HTMLInputElement>;
