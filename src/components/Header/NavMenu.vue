<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';
import type { INavMenuProps } from '../../../types';

const isHovered = ref(false);
const isOpen = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
  isOpen.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
  isOpen.value = false;
};

const bgStyle = computed(() =>
  isHovered.value
    ? props.cScheme
      ? `bg-${props.cScheme}-500`
      : ''
    : props.cScheme
      ? `bg-${props.cScheme}-500`
      : 'bg-transparent'
);

const fontColorStyle = computed(() =>
  isHovered.value
    ? props.fColor
      ? `text-${props.fColor}`
      : 'text-white'
    : props.fColor
      ? `text-${props.fColor}`
      : 'text-white-700'
);

const props = defineProps<INavMenuProps>();
</script>

<template>
  <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <Menu :isOpen="isOpen">
      <MenuButton :colorScheme="cScheme" :class="[
          isHovered
            ? cScheme
              ? `bg-${cScheme}-500`
              : ''
            : cScheme
              ? `bg-${cScheme}-500`
              : 'bg-transparent',
          isHovered
            ? fColor
              ? `text-${fColor}`
              : 'text-white'
            : fColor
              ? `text-${fColor}`
              : 'text-white-700',
          'px-2',
          'py-5',
          'outline-none',
          'min-w-60',
        ]" :hover="{
      'bg': hoverColor ? hoverColor : 'white',
      'text-color': fColor ? fColor : 'black'
    }" :active="{
      'bg': hoverColor ? hoverColor : 'white',
      'text-color': fColor ? fColor : 'black'
    }" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" as="button" size="sm"
        @focus="() => { $event.target.blur() }">
        <div class="flex">
          <template v-if="leftIcon">
            <div class="flex">
              <div class="flex items-center mr-1.5">
                {{ leftIcon }}
              </div>
              <div class="flex items-center mr-1.5">
                <span>{{ menuName }}</span>
              </div>
            </div>
          </template>
          <template v-else-if="textAlign">
            <span>{{ menuName }}</span>
          </template>
          <template v-else>
            <span>{{ menuName }}</span>
          </template>
          <template v-if="!noChevron">
            <div class="flex items-center ml-1.5">
              <GoTriangleDown class="h-6 w-6" />
            </div>
          </template>
        </div>
      </MenuButton>

      <MenuList @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="mt-[-7.5px]">
        {{ children }}
      </MenuList>
    </Menu>
  </div>
</template>
  