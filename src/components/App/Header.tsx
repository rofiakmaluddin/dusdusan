'use client';

import Button from '@/components/Button/Button';
import Image from 'next/image';
import Input from '@/components/Input/Input';
import { MagnifyingGlass } from 'phosphor-react';

export default function Header() {
  return (
    <header className="p-3">
      <div className="flex justify-between">
        <Image
          src="/images/logo-dusdusan.webp"
          alt="Logo"
          width={123.83}
          height={32}
        />
        <div className="flex gap-2">
          <Button outlined>Masuk</Button>
          <Button>Daftar</Button>
        </div>
      </div>
      <Input
        placeholder="Cari barang kamu disini..."
        block
        wrapperClassName="mt-3"
        prefixIcon={<MagnifyingGlass size={23} />}
      />
    </header>
  );
}
