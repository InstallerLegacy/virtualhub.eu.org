---
keywords: [DECSys-7, "PDP-7", SIMH, 1960s, 1965]
image: ./DECSys-7-SIMH-3.webp
description: 'We can run ! DECSys-7 on the SIMH PDP-7 emulator. First, we need to download the ! DECSys-7 kit. You can download the kit needed to run DECSys on the SIMH PDP-7 emulator from the "SIMH Legacy" website:'
sidebar_position: 1
sidebar_label: "! DECSys-7 on SIMH"
---

# How to install ! DECSys-7 on SIMH?

![SIMH PDP-7 emulator with ! DECSys-7](./DECSys-7-SIMH-3.webp)

We can run [! DECSys-7](/1960s/1965/decsys) on the SIMH PDP-7 emulator. First, we need to download the ! DECSys-7 kit.

## Downloads

You can download the kit needed to run ! DECSys-7 on the SIMH PDP-7 emulator from the ["SIMH Legacy" website](http://simh.trailing-edge.com/):

- [! DECSys-7 kit](http://simh.trailing-edge.com/kits/decsys.zip)

## Using ! DECSys-7

:::tip

If you have not already installed SIMH PDP-7 emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-pdp7/) on Linux and Windows.

:::

Extract the kit you downloaded. Inside you will find several files. Create a folder somewhere to store the files for this VM, and move the file named `decsys.dtp` and `decsys.rim` into it.

Now we will create a config file for our VM. Create a text file called `pdp7.ini` with the following content in the VM folder:

```ini
att dt2 decsys.dtp
att dt3 scratch.dtp
load decsys.rim 17640
run
```

![pdp7.ini](./DECSys-7-SIMH-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
pdp7
```

![pdp7](./DECSys-7-SIMH-2.webp)

After the emulator starts, type `CONTEN` followed by `!`. All commands in ! DECSys-7 execute when you type `!`. You will see the following screen:

![CONTEN!](./DECSys-7-SIMH-3.webp)

Type `S,L,W` followed by `!`. It will list all the files available on the disk.

![List of files in ! DECSys-7](./DECSys-7-SIMH-4.webp)

That's it! We used ! DECSys-7. We can create a shell script to make it easy to launch the VM. Create a file called `DECSys-7.sh` with the following content:

```bash
#!/bin/bash
pdp7
```

Now make the file executable:

```bash
chmod +x DECSys-7.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1960s/1965/decsys/#manuals) on the [main ! DECSys-7 page](/1960s/1965/decsys) to learn how to use it.

### Windows

:::tip

You should use Linux. If you don’t know how to install a Linux distro, see [our tutorials on how to install Kubuntu](https://setup.virtualhub.eu.org/tag/os/), a beginner-friendly distro.

:::

On Windows, you need to place the `PDP7.exe` file you downloaded in [this tutorial](https://setup.virtualhub.eu.org/simh-pdp7#windows) in the VM folder. Then you can follow the above tutorial as usual. The shell script will not work on Windows. You need to rename it to `DECSys-7.bat`. Then you can double-click the file to launch the VM, no need to make it executable.

## Credits

- The disk image and other files used above are from a kit available on [SimH "Classic" website](http://simh.trailing-edge.com/).

## Video tutorial

Do you want to follow the tutorial by watching a video? Here it is:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/osLz_k75ibE?si=TYw9Wmd05zw2EDer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<hr/>

Archives of this tutorial are available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1960s/1965/decsys/simh/).
