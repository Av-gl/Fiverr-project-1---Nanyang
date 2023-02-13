import { Affix, Button, Transition } from "@mantine/core"
import { useWindowScroll } from '@mantine/hooks';

const Scroll = () => {
    const [scroll, scrollTo] = useWindowScroll();
    return (
        <Affix position={{ top: 30, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                  {(transitionStyles) => (
                    <Button
                      style={transitionStyles}
                      onClick={() => scrollTo({ y: 0 })}
                    >
                      Scroll to top
                    </Button>
                  )}
                </Transition>
        </Affix>
    )
}

export default Scroll