import Image from 'next/image';

type LogoProps = {
  src?: string;
  width?: number;
  height?: number;
  style?: string;
  alt: string;
  containerStyle?: string;
};

export default function Logo({ src, width, height, style, alt, containerStyle }: LogoProps) {
  return (
    <div className={`shrink-0 rounded-full sm:rounded-2xl flex items-center justify-center bg-gray-100 dark:bg-gray-700 shadow-md ${containerStyle}`}>
      {src && <Image src={src} width={width} height={height} className={`${style}`} alt={alt}/>}
    </div>
  );
}