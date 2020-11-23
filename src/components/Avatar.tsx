import { defineComponent, PropType } from 'vue';

interface AvatarProps {
  url: string;
  width: number;
  height: number;
}

export default defineComponent({
  name: 'Avatar',
  setup(props: AvatarProps) {
    return () => (
      <>
        <div class="avatar">
          <img src="{props.url}" alt="avatar" />
        </div>
      </>
    );
  },
});
