"use client";

import {useLocale} from "next-intl";
import {usePathname,useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher(){

const locale=useLocale();

const router=useRouter();

const pathname=usePathname();

function change(){

router.replace(pathname,{locale:locale==="en"?"ar":"en"});

}

return(

<button
className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-luxury-charcoal/60 transition hover:text-luxury-gold"
onClick={change}>

{locale==="en"?"العربية":"English"}

</button>

);

}