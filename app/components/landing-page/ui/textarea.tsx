import { cn } from "@/app/lib/utils";
import React, { useState } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function TextArea({
  label,
  error,
  maxLength,
  onChange,
  value,
  defaultValue,
  className,
  id,
  required,
  ...props
}: TextAreaProps) {
  const [charCount, setCharCount] = useState(
    String(value || defaultValue || "").length
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    if (onChange) {
      onChange(e);
    }
  };

  // Verifica se atingiu o limite
  const isAtLimit = maxLength ? charCount >= maxLength : false;

  return (
    <div className="flex flex-col gap-2">
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-bold text-content-heading ml-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Textarea */}
      <textarea
        id={id}
        required={required}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        maxLength={maxLength}
        className={cn(
          "w-full p-4 rounded-2xl border outline-none transition-all resize-y min-h-[120px] text-content-body",
          // Se tiver erro OU atingir o limite, fica vermelho
          error || isAtLimit
            ? "border-red-300 focus:border-red-500 bg-red-50/10 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
            // Caso contrário, usa as cores padrão e foco roxo (ou a cor do seu tema)
            : "bg-background-secondary border-transparent focus:border-violet-500 focus:bg-background-primary focus:shadow-[0_0_0_4px_rgba(139,92,246,0.1)]",
          className
        )}
        {...props}
      />

      {/* Rodapé: Erro e Contador de Caracteres */}
      <div className="flex justify-between items-start px-1 min-h-[20px]">
        <div className="flex-1">
          {error && (
            <span className="text-red-500 text-xs font-medium">
              {error}
            </span>
          )}
        </div>
        
        {/* Contador dinâmico */}
        {maxLength && (
          <span 
            className={cn(
              "text-xs font-medium ml-4 shrink-0 transition-colors",
              isAtLimit ? "text-red-500" : "text-content-body/60"
            )}
          >
            {charCount} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
}