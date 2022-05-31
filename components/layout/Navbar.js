import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import { HStack } from "@chakra-ui/react";
import NeonText from "../NeonText";

const Navbar = () => {
    return(
    <Breadcrumb position='sticky' height="10vh" width="100vw"
    display="flex" alignItems="center" justifyContent="center"
    Id="home"
    >
        <HStack width='80vw'
            display="flex" alignItems="center" 
            justifyContent="center"
        >
        <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize='lg'
            textColor="white">
                    Profile
            </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#' textColor="white">
              Biography
            </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#' textColor="white">
                Programming
            </BreadcrumbLink>
        </BreadcrumbItem>

        </HStack>
    </Breadcrumb>
    )
}
export { Navbar as default};