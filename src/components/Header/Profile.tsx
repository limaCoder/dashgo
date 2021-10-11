import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box
          mr='4'
          textAlign='right'
        >
          <Text>Mario Lima</Text>
          <Text color='gray.300' fontSize='small'>
            marioaulima15@outlook.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Fernanda Leite' src='https://github.com/limaCoder.png' />
    </Flex>
  )
} 