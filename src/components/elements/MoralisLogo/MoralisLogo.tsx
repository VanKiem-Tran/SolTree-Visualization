/* eslint-disable etc/no-commented-out-code */
// import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  // const { colorMode } = useColorMode();

  return (
    <Image
      src={'/soltree.png'}
      height={45}
      width={150}
      alt="Moralis"
    />
  );
};

export default MoralisLogo;
